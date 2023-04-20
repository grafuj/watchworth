DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  film_id INTEGER REFERENCES films(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  engagement VARCHAR(255),
  engagement_score FLOAT(24) NOT NULL,
  acting VARCHAR(255),
  acting_score FLOAT(24) NOT NULL,
  plot_consistency VARCHAR(255),
  plot_consistency_score FLOAT(24) NOT NULL,
  scene_choice VARCHAR(255),
  scene_choice_score FLOAT(24) NOT NULL,
  dialogue VARCHAR(255),
  dialogue_score FLOAT(24) NOT NULL,
  character_desires VARCHAR(255),
  character_desires_score FLOAT(24) NOT NULL,
  theme VARCHAR(255),
  theme_score FLOAT(24) NOT NULL,
  suitability VARCHAR(255),
  suitability_score FLOAT(24) NOT NULL,
  overall_score FLOAT(24) CHECK (overall_score >= 0 AND overall_score <= 10)
);
