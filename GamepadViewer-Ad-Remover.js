// ==UserScript==
// @name           GamepadViewer Ad Remover
// @name:tr        GamepadViewer Reklam Kaldırıcı
// @namespace      https://github.com/Arcdashckr/GamepadViewer-Ad-Remover
// @version        1.0.0
// @description    It hides the ad layer that appears at certain intervals
// @description:tr Belirli aralıklarla beliren reklam katmanını gizler
// @match          https://gamepadviewer.com/*
// @match          https://*.gamepadviewer.com/*
// @run-at         document-end
// @icon           https://overlay.gamepadviewer.com/favicon.ico
// @grant          none
// @license        MIT
// @supportURL     https://github.com/Arcdashckr/GamepadViewer-Ad-Remover/issues
// @downloadURL    https://github.com/Arcdashckr/GamepadViewer-Ad-Remover/raw/main/GamepadViewer-Ad-Remover.js
// @updateURL      https://github.com/Arcdashckr/GamepadViewer-Ad-Remover/raw/main/GamepadViewer-Ad-Remover.js
// ==/UserScript==

(function () {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        div.controller.custom {
            background-size: 0px 0px, contain !important;

            animation: none !important;
            -webkit-animation: none !important;
        }
    `;

    document.head.appendChild(style);
})();
