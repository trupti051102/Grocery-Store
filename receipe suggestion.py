import random

# Define a dictionary of possible ingredients and their corresponding recipes
ingredient_recipes = {
    'chicken': ['Chicken Curry', 'Baked Chicken'],
    'beef': ['Beef Stew', 'Beef Stir Fry'],
    'pork': ['Pork Chops', 'Pork Carnitas'],
    'shrimp': ['Shrimp Scampi', 'Coconut Shrimp'],
    'tofu': ['Tofu Stir Fry', 'Tofu Curry']
}

# Define a list of dietary restrictions
restrictions = ['vegetarian', 'vegan', 'gluten-free']

# Ask the user for their ingredient preference and dietary restrictions
ingredient = input('What ingredient would you like to use? ')
restriction = input('Do you have any dietary restrictions? (vegetarian, vegan, gluten-free) ')

# Find all the recipes that match the user's ingredient preference and dietary restrictions
matching_recipes = []
for recipe_ingredients, recipes in ingredient_recipes.items():
    if ingredient.lower() in recipe_ingredients and restriction.lower() in recipes:
        matching_recipes.extend(recipes)

# Select a random recipe from the matching recipes
if matching_recipes:
    suggestion = random.choice(matching_recipes)
    print('How about trying {suggestion}?')
else:
    print('Sorry, we could not find a recipe that matches your preferences.')
