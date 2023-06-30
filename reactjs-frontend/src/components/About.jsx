import React from "react";
import { Link } from "react-router-dom";


export default function About(props) {
  const { films, users, reviews } = props;

  return (
    <>
    <h1>Welcome to our Watchworth Film Review System</h1>

    <p>At our Watchworth, we believe that movies have the power to entertain, inspire, and provoke thought. We understand the importance of thoroughly analyzing and understanding a film, beyond a simple rating or score. That is why we have developed a comprehensive film review system that aims to provide users with a deeper exploration of movies, allowing for a more informed and enriching cinematic experience.</p>

    <h2>Why do we need a different approach to film reviews?</h2>
    <p>Traditional rating systems, such as those employed by popular platforms like <a href="https://www.rottentomatoes.com/" target="_blank">Rotten Tomatoes</a> or <a href="https://www.imdb.com/" target="_blank">IMDb</a>, often reduce the complexity of a film to a single numerical value. While these ratings offer a quick glance at overall reception, they fail to capture the nuances and intricacies that make each film a unique artistic creation.</p>

    <h2>Our film review system is designed to address this limitation by focusing on eight essential categories:</h2>
    <ol>
        <li>Engagement: Evaluate how well a movie captures and sustains the viewer's attention, examining its ability to immerse and connect with the audience emotionally. Did you want to pull out your phone?</li>
        <li>Acting: Assess the performances of the cast, analyzing their ability to bring characters to life, convey emotions convincingly, and contribute to the overall authenticity of the film.</li>
        <li>Plot Consistency: Examine the coherence and logical progression of the storyline, ensuring that the plot unfolds in a way that is both compelling, satisfying and following the internal rules presented in the film. In this way, films can present novel plots that may not be clear initially, but should become clear as the fundamental points are presented and understood.</li>
        <li>Scene Choice: Scrutinize the selection and arrangement of scenes, looking for their relevance, impact, and contribution to the overall narrative and visual aesthetics.</li>
        <li>Dialogue: Evaluate the quality and effectiveness of the dialogue, taking into account its authenticity, wit, depth, and contribution to character development and storytelling.</li>
        <li>Character Desires: Analyze the motivations and desires of the characters, assessing their depth and complexity, and how effectively they drive the narrative and engage the audience.</li>
        <li>Theme: We delve into the underlying themes and messages conveyed by the film, exploring their relevance, originality, and ability to provoke thought and discussion. What was the film trying to say?</li>
        <li>Suitability: We consider the appropriateness of the film for different audiences, taking into account factors such as age restrictions, content sensitivity, and the potential impact on viewers. While some content may be sensitive, suitability is much more about how the film approached showcasing challenging and complex issues that exist and are worth discussing but must be done appropriately.</li>
    </ol>

    <p>By offering this comprehensive approach to film reviews, we empower users to delve into the intricate details and aspects that contribute to the overall quality of a movie. This enables a more nuanced understanding and appreciation of the filmmaking craft, allowing for informed choices and enhancing the cinematic experience.</p>

    <h2>Our film review system can be used in various ways:</h2>
    <ul>
        <li>Movie enthusiasts seeking a deeper analysis of their favorite films can explore our system to gain valuable insights.</li>
        <li>Parents concerned about the suitability of a movie for their children can find information about age restrictions and content sensitivity.</li>
        <li>Anyone looking for a well-rounded evaluation before deciding what to watch can rely on our system for informed choices.</li>
    </ul>

    <p>We invite you to explore our film review system, dive into the fascinating world of cinema, and discover the multitude of elements that shape the magic of motion pictures. Join us in embracing a more comprehensive approach to film evaluation and elevate your movie-watching experience to new heights.</p>
    </>
  );
}
