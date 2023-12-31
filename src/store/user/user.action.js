import { createAction } from "../../utils/reducer/reducer.utils"
import { USER_ACTIONS_TYPES } from "./user.types"

//This actions below are only to trigger the user Sagas. userReducer doesn't recognices them
export const checkUserSession = () =>
  createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION)

export const googleSignInStart = () =>
  createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START)

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, { email, password })

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  })

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })

export const signUpFailed = (error) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_FAILED, error)

export const signOutStart = () =>
  createAction(USER_ACTIONS_TYPES.SIGN_OUT_START)

export const signOutSuccess = () =>
  createAction(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS)
export const signOutFailed = (error) =>
  createAction(USER_ACTIONS_TYPES.SIGN_OUT_FAILED, error)

// These actions below are the only actions that userReducer recognices
export const signInSuccess = (user) =>
  createAction(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user)
export const signInFailed = (error) =>
  createAction(USER_ACTIONS_TYPES.SIGN_IN_FAILED, error)
