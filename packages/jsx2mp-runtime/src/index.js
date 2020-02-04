import { runApp, createComponent, createPage } from './bridge';
import { useAppLaunch, useAppShow, useAppHide, useAppShare, useAppError } from './app';
import { usePageShow, usePageHide} from './page';
import { withRouter } from './router';
import Component from './component';
import createStyle from './createStyle';
import createContext from './createContext';
import classnames from './classnames';
import createRef from './createRef';
import { addNativeEventListener, removeNativeEventListener, registerNativeEventListeners } from './nativeEventListener';

export {
  runApp,
  createPage,
  createComponent,
  createStyle,
  createContext,
  classnames,
  createRef,

  Component,

  // Cycles
  useAppLaunch,
  useAppShow,
  useAppHide,
  useAppShare,
  useAppError,

  usePageShow,
  usePageHide,

  // Router
  withRouter,

  // Native events
  addNativeEventListener,
  removeNativeEventListener,
  registerNativeEventListeners
};

/* hooks */
export * from './hooks';
