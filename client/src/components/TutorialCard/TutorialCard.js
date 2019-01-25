import React from "react";
import "./TutorialCard.css";

function TutorialCard(props) {
  return (
      <div>
          <h3>{props.title}</h3>
    <iframe className="editor-container" id="editor" src={props.link} view="Editor" title="code editor"></iframe>
    <div class="accordion" id="accordionExample">

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Solution
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        <p>{props.solution}</p>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default TutorialCard;