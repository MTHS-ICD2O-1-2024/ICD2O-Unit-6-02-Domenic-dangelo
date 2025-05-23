// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

'use strict'

let cookiesCount = localStorage.cookiesCount ? Number(localStorage.cookiesCount) : 0;

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function updateCookieCount () {
  cookiesCount++
  localStorage.cookiesCount = cookiesCount
  document.getElementById("result").innerHTML = "Amount of cookies: " + cookiesCount
}
