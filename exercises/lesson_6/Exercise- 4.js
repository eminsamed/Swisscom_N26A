document.querySelector("#push").onclick = function () {
  if (
    document.querySelector("#newtask input").value.length ==
    0
  ) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${
                      document.querySelector(
                        "#newtask input"
                      ).value
                    }
                </span>
                <button class="delete">
                </button>
            </div>
        `;

    let current_tasks =
      document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
