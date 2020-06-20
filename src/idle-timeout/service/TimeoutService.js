
const maxIdleMinsInactive = process.env.REACT_APP_IDLE_TIMEOUT_MINS;
const idleWarningPromptTime = parseInt(process.env.REACT_APP_IDLE_WARNING_PROMPT_TIME) * 60000;
const maxTimeOut = parseInt(maxIdleMinsInactive) * 60000;


const TimeoutService = function () {
    this.timeLeft = maxTimeOut;
};

TimeoutService.prototype.resetTimeout = function () {
    this.timeLeft = maxTimeOut;
};

TimeoutService.prototype.handleTimeout = function (setModalIsOpen) {
    if (this.timeLeft < idleWarningPromptTime) {
        this.subtractNumberOfSeconds(1)
        setModalIsOpen(true);
        if (this.timeLeft < 1) this.logout();
    } else {
        this.subtractNumberOfSeconds(1);
    }
};

TimeoutService.prototype.logout = function () {
    window.location.href = '/login';
};

TimeoutService.prototype.getMaxMinsInactive = function () {
    return maxIdleMinsInactive;
};

TimeoutService.prototype.subtractNumberOfSeconds = function (seconds) {
    return this.timeLeft -= seconds * 1000;
};

export default TimeoutService;