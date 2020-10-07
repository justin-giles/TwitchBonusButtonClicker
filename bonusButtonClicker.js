const twitchBonusButton = document.getElementsByClassName("tw-button tw-button--success tw-interactive");
const targetNode = document.documentElement;

let observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}

function callback (mutations) {
    if (twitchBonusButton.length == 1) {
        twitchBonusButton[0].click();
    }
}

const observer = new MutationObserver(callback);

observer.observe(targetNode, observerOptions);