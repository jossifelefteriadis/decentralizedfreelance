import styles from "../styles/PreviousProjects.module.css";

export default function PreviousProjects() {
  return (
    <section className={styles.previousProjectsContainer}>
      <p>Projects</p>
      <section className={styles.previousProjects}>
        <button type="button" className={styles.addPreviousProject}>
          <span>
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              width="15"
              height="15"
            >
              <path
                fill="currentColor"
                d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
              ></path>
            </svg>
          </span>{" "}
          Add Project
        </button>
      </section>
    </section>
  );
}
