/*
*  Facebook - Crypt Message
*  Copyright (C) 2014  Novica Zivkovic
*
*  This program is free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  This program is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  You should have received a copy of the GNU General Public License along
*  with this program; if not, write to the Free Software Foundation, Inc.,
*  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*
*  Contact: n0v1c4z1vk0v1c@gmail.com
*/

function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf("facebook.com") > -1) {
    chrome.pageAction.show(tabId);
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab)   { chrome.tabs.executeScript(tab.id, { file: "cryptAction.js"}); });

chrome.commands.onCommand.addListener(function(tab)     { chrome.tabs.executeScript(tab.id, { file: "cryptAction.js"}); });

chrome.commands.onCommand.addListener(function(tab)     { chrome.tabs.executeScript(tab.id, { file: "decryptAction.js"}); });
