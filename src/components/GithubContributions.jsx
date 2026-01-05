import { GitHubCalendar } from "react-github-calendar";
import './GithubContributions.css'

function GithubContributions() {
  return (
    <div className="container">
      <p><strong>GitHub Contributions</strong></p>
      <div className="calendar-wrapper">
        <GitHubCalendar username="jakejakepacia" />
      </div>
    </div>
  );
}

export default GithubContributions;
