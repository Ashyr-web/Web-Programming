// Main JS for Engineering College site
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Bootstrap tooltips if present
  if (typeof bootstrap !== 'undefined') {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
      new bootstrap.Tooltip(el)
    })
  }

  // Contact form validation with anti-spam
  const contactForm = document.getElementById('contactForm')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      let valid = true
      contactForm.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('is-invalid')
          input.setAttribute('aria-invalid', 'true')
          valid = false
        } else {
          input.classList.remove('is-invalid')
          input.setAttribute('aria-invalid', 'false')
        }
      })
      // anti-spam check
      const antispam = document.getElementById('antispam')
      if (antispam && antispam.value.trim() !== '5') {
        antispam.classList.add('is-invalid')
        antispam.setAttribute('aria-invalid', 'true')
        valid = false
      }
      // strict email check
      const contactEmail = document.getElementById('contactEmail')
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (contactEmail) {
        if (!emailRegex.test(contactEmail.value.trim())) {
          contactEmail.classList.add('is-invalid')
          contactEmail.setAttribute('aria-invalid', 'true')
          valid = false
        } else {
          contactEmail.classList.remove('is-invalid')
          contactEmail.setAttribute('aria-invalid', 'false')
        }
      }
      const alertBox = document.getElementById('contactAlert')
      if (!valid) {
        alertBox.className = 'alert alert-danger'
        alertBox.textContent = 'Please correct the highlighted fields.'
        alertBox.classList.remove('d-none')
        alertBox.focus()
        return
      }
      // simulate submission
      alertBox.className = 'alert alert-success'
      alertBox.textContent = 'Message sent. Thank you — this is a simulated submission.'
      alertBox.classList.remove('d-none')
      contactForm.reset()
    })
  }

  // Registration form validation
  const regForm = document.getElementById('registrationForm')
  if (regForm) {
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirmPassword')
    const togglePassword = document.getElementById('togglePassword')
    const regAlert = document.getElementById('regAlert')

    // password toggle
    if (togglePassword && password) {
      togglePassword.addEventListener('click', () => {
        const show = password.type === 'password'
        password.type = show ? 'text' : 'password'
        togglePassword.textContent = show ? 'Hide' : 'Show'
        togglePassword.setAttribute('aria-pressed', show)
      })
    }

    regForm.addEventListener('submit', (e) => {
      e.preventDefault()
      let valid = true
        // basic required fields
        regForm.querySelectorAll('[required]').forEach(input => {
          if (input.type === 'radio') return
          if (!input.value || !input.value.toString().trim()) {
            input.classList.add('is-invalid')
            input.setAttribute('aria-invalid', 'true')
            valid = false
          } else {
            input.classList.remove('is-invalid')
            input.setAttribute('aria-invalid', 'false')
          }
        })
      // radio group check
      const modeChecked = regForm.querySelector('input[name="mode"]:checked')
      if (!modeChecked) {
        valid = false
      }
      // password rules
      if (password && password.value.length < 8) {
        password.classList.add('is-invalid')
        valid = false
      }
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid')
        valid = false
      }
        // Email stricter validation (HTML pattern exists but enforce in JS too)
        const emailInput = document.getElementById('email')
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (emailInput) {
          if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid')
            emailInput.setAttribute('aria-invalid', 'true')
            valid = false
          } else {
            emailInput.classList.remove('is-invalid')
            emailInput.setAttribute('aria-invalid', 'false')
          }
        }

        // Phone validation: accept +1, +44, +966 country codes
        const phoneInput = document.getElementById('phone')
        const phoneRegex = /^\+(1|44|966)[0-9\-\s]{6,15}$/
        if (phoneInput) {
          if (!phoneRegex.test(phoneInput.value.trim())) {
            phoneInput.classList.add('is-invalid')
            phoneInput.setAttribute('aria-invalid', 'true')
            valid = false
          } else {
            phoneInput.classList.remove('is-invalid')
            phoneInput.setAttribute('aria-invalid', 'false')
          }
        }

        // Date of birth validation: user must be at least 15 years old
        const dobInput = document.getElementById('dob')
        if (dobInput) {
          const dobValue = dobInput.value
          if (!dobValue) {
            dobInput.classList.add('is-invalid')
            dobInput.setAttribute('aria-invalid', 'true')
            valid = false
          } else {
            const dob = new Date(dobValue)
            const today = new Date()
            // compute age
            let age = today.getFullYear() - dob.getFullYear()
            const m = today.getMonth() - dob.getMonth()
            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
              age--
            }
            if (age < 15) {
              dobInput.classList.add('is-invalid')
              dobInput.setAttribute('aria-invalid', 'true')
              valid = false
            } else {
              dobInput.classList.remove('is-invalid')
              dobInput.setAttribute('aria-invalid', 'false')
            }
          }
        }
      if (!valid) {
        regAlert.className = 'alert alert-danger'
        regAlert.textContent = 'Please fix the errors in the form.'
        regAlert.classList.remove('d-none')
        regAlert.focus()
        return
      }
      // simulate successful submission
      regAlert.className = 'alert alert-success'
      regAlert.textContent = 'Registration submitted — this is a simulated confirmation.'
      regAlert.classList.remove('d-none')
      regForm.reset()
    })
  }

  // FAQ accordion: improve keyboard support and aria
  document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        button.click()
      }
    })
  })

  // Student Life filters
  const filterButtons = document.getElementById('filterButtons')
  if (filterButtons) {
    filterButtons.addEventListener('click', (e) => {
      const btn = e.target.closest('button')
      if (!btn) return
      const filter = btn.getAttribute('data-filter')
      filterButtons.querySelectorAll('button').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      document.querySelectorAll('.filter-item').forEach(item => {
        if (filter === 'all') {
          item.classList.remove('hidden')
        } else {
          if (item.classList.contains(filter)) item.classList.remove('hidden')
          else item.classList.add('hidden')
        }
      })
    })
  }

  // Active nav link based on current page
  (() => {
    try {
      const path = location.pathname.split('/').pop() || 'index.html'
      document.querySelectorAll('nav a.nav-link').forEach(a => {
        const href = a.getAttribute('href')
        if (href && href.indexOf(path) !== -1) {
          a.classList.add('active')
        }
      })
    } catch (e) { /* ignore */ }
  })()

  // Ensure focusable elements show visible outline when tabbing
  document.addEventListener('keydown', function(e){
    if (e.key === 'Tab') document.documentElement.classList.add('show-focus');
  })
})
