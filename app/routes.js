const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



//
// Version 1
//

// disability answer

router.post('/pcq-v1/applicant-disability-answer', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/pcq-v1/disability/disability-yes?appointee=false&')
  } else {
    res.redirect('/pcq-v1/pregnancy?appointee=false&')
  }

})
router.post('/pcq-v1/appointee-disability-answer', function (req, res) {

  let disabilityInformation = req.session.data['disability-information']

  if (disabilityInformation == 'Yes') {
    res.redirect('/pcq-v1/disability/disability-yes?appointee=true&')
  } else {
    res.redirect('/pcq-v1/pregnancy?appointee=true&')
  }

})

// disability details


router.post('/pcq-v1/applicant-disability-details', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/pcq-v1/disability/disability-yes-detail?appointee=false&')
  }
  else {
    res.redirect('/pcq-v1/pregnancy?appointee=false&')
  }

})

router.post('/pcq-v1/appointee-disability-details', function (req, res) {

  let disabilityYes = req.session.data['disability-yes']

  if (disabilityYes == 'Yes, limited a little' || disabilityYes == 'Yes, limited a lot') {
    res.redirect('/pcq-v1/disability/disability-yes-detail?appointee=true&')
  }
  else {
    res.redirect('/pcq-v1/pregnancy?appointee=true&')
  }

})

// ethnicity answer

router.post('/pcq-v1/appointee-ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']

  if (ethnicGroup == "Prefer not to say") {
    res.redirect('religion?appointee=true&')
  } else if (ethnicGroup == "White") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-white?appointee=true&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-mixed?appointee=true&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-asian?appointee=true&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-black?appointee=true&')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-another?appointee=true&')
  } else {
    res.redirect('religion?appointee=true&')
  }

})
router.post('/pcq-v1/applicant-ethnicity-answer', function (req, res) {
  let ethnicGroup = req.session.data['ethnic-group']
if (ethnicGroup == "Prefer not to say") {
    res.redirect('religion?appointee=false&')
  } else if (ethnicGroup == "White") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-white?appointee=false&')
  } else if (ethnicGroup == "Mixed or multiple ethnic groups") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-mixed?appointee=false&')
  } else if (ethnicGroup == "Asian or Asian British") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-asian?appointee=false&')
  } else if (ethnicGroup == "Black, African, Black British or Caribbean") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-black?appointee=false&')
  } else if (ethnicGroup == "Another ethnic group") {
    res.redirect('/pcq-v1/ethnic-group/ethnicity-another?appointee=false&')
  } else {
    res.redirect('religion?appointee=false&')
  }

})

// first language answer

router.post('/pcq-v1/appointee-language', function (req, res) {

  let language = req.session.data['english-language']

  if (language == 'Other') {
    res.redirect('/pcq-v1/english-level?appointee=true&')
  }
  else {
    res.redirect('/pcq-v1/sex?appointee=true&')
  }
})

router.post('/pcq-v1/applicant-language', function (req, res) {

  let language = req.session.data['english-language']

  if (language == 'Other') {
    res.redirect('/pcq-v1/english-level?appointee=false&')
  }
  else {
    res.redirect('/pcq-v1/sex?appointee=false&')
  }
})


module.exports = router
