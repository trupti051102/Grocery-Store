import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# Load the product data into a pandas dataframe
product_data = pd.read_csv('product_data.csv')

# Compute the pairwise cosine similarity between the products
cosine_sim = cosine_similarity(product_data)

# Define a function to get the top N product recommendations for a given product ID
def get_recommendations(product_id, cosine_sim, product_data, top_n=5):
    # Get the index of the product in the product_data dataframe
    product_index = product_data[product_data['product_id'] == product_id].index[0]
    
    # Get the pairwise cosine similarities between the product and all other products
    sim_scores = list(enumerate(cosine_sim[product_index]))
    
    # Sort the products by their cosine similarity scores in descending order
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    
    # Get the top N most similar products (excluding the input product itself)
    top_products = [i[0] for i in sim_scores[1:top_n+1]]
    
    # Return the top N product recommendations
    return product_data.iloc[top_products]['product_name'].tolist()

# Get the top 5 product recommendations for product ID 1234
recommendations = get_recommendations(1234, cosine_sim, product_data, top_n=5)

print(recommendations)
