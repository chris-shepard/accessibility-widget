window.onload = function () {
    let widget = document.getElementById('accessibility-widget');

    widget.addEventListener('click', (e) => {
        e.preventDefault();
        let widgetIcon = this.document.getElementById('a-widget-control');
        let widgetOptions = this.document.getElementById('a-widget-options');
        if (widget.style.width === "18rem") {
            widget.style.width = "50px";
            widgetIcon.src = "./wheelchair.svg";
        } else {
            widget.style.width = "18rem";
            widgetIcon.src = "./cancel.svg";
            widgetOptions.style.opacity = 1;
        }
        
        widget.classList.toggle('expanded')
        widgetOptions.classList.toggle('hidden');
    })
}