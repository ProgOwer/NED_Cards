#!/bin/bash


# Git Setup Multiple Repository
git remote add gitlab git@gitlab.com:ProgOwer/ned_cards.git
git remote set-url --add --push origin git@gitlab.com:ProgOwer/ned_cards.git

git remote add github git@github.com:ProgOwer/NED_Cards.git
git remote set-url --add --push origin git@github.com:ProgOwer/NED_Cards.git


# Display Config
git remote show origin

git config --list
