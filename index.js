(function () {
  const createTooltip = function (alt) {
    const tooltip = document.createElement("div");
    tooltip.style.cssText =
      "position:absolute;top:0;left:0;border-radius:3px;color:#ffffff;background:rgba(0,0,0,0.7);padding:5px 10px;";
    const tooltipText = document.createElement("span");
    tooltipText.style.cssText = "user-select:all;";
    tooltipText.textContent = alt;
    tooltip.appendChild(tooltipText);
    const clearBtn = document.createElement("span");
    clearBtn.style.cssText =
      "display:inline-block;background:rgba(200,200,200,0.4);font-size:smaller;border-radius:2px;padding:0 3px;cursor:pointer;margin-left:3px;";
    clearBtn.innerHTML = "&times;";
    tooltip.appendChild(clearBtn);
    clearBtn.addEventListener("click", function (event) {
      event.preventDefault();
      this.parentNode.remove();
    });
    return tooltip;
  };

  const images = document.querySelectorAll("img");
  images.forEach(function (img) {
    const alt = img.getAttribute("alt");
    if (alt === null || alt === "") {
      return;
    }
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "position:relative;";
    const imgDisplay = img.style.display;
    if (imgDisplay === "inline" || imgDisplay === "inline-block") {
      wrapper.style.display = "inline-block";
    }
    img.before(wrapper);
    wrapper.appendChild(img);
    wrapper.appendChild(createTooltip(alt));
  });
})();
