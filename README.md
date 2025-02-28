# Monster Mini-Game Project

## Description

This project started as an application that used a local server (db.json) and static image files to display avatars. We then transitioned to a simplified version that leverages an external API to generate dynamic avatars, eliminating the reliance on local data and allowing for the random generation of monsters or trolls.

## Version Changes

- **Initial Version:**
    - Utilized a `db.json` file to store avatar data.
    - Loaded images from a local folder (`./etc/images`).
    - Basic CRUD functionality without integration with external APIs.

- **New Version:**
    - Removed the use of `db.json` and local image files.
    - Implemented external avatar fetching using the [RoboHash](https://robohash.org) API with the `set=set2` parameter, which generates random monster/troll avatars.
    - Added a simple mini-game where two monsters fight in rounds until a winner is declared.

## Future Improvements

- **Visual Enhancements:**  
  I plan to integrate a more attractive and modern design, with animations and transitions to create a dynamic and engaging user experience.

- **Enhanced Mini-Game:**  
  I aim to expand the combat system by incorporating:
    - Real-time API calls to fetch new monsters/trolls.
    - A turn-based system with special abilities for each monster.
    - Possibility for multiple matchups and various game modes (e.g., tournaments or challenges).

- **API Integration & Optimization:**  
  I will explore ways to optimize and manage API calls to avoid system overload and improve response times, ensuring a smooth gaming experience.

This project is in its early stages, and future updates are expected to bring this mini-game as a fun and interactive experience for users.