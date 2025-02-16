from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

# Load the trained model
try:
    model = joblib.load("random_forest_anxiety_model.pkl")
    print("✅ Model loaded successfully!")
except Exception as e:
    print("❌ Error loading model:", e)

# Encoding categorical features
gender_map = {"Male": 0, "Female": 1, "Other": 2}
smoking_map = {"No": 0, "Yes": 1}
family_history_map = {"No": 0, "Yes": 1}
dizziness_map = {"No": 0, "Yes": 1}
medication_map = {"No": 0, "Yes": 1}
life_event_map = {"No": 0, "Yes": 1}
occupation_map = {"Teacher": 0, "Engineer": 1, "Student": 2, "Other": 3}

def classify_anxiety_level(score):
    """Convert severity score into categories"""
    if score <= 3:
        return "Low"
    elif 4 <= score <= 6:
        return "Medium"
    else:
        return "High"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("📩 Received input:", data)  # Debugging print

        if not data:
            return jsonify({'error': 'No input data received!'}), 400

        # Extract features from the request JSON (with lowercase keys)
        processed_data = [
            int(data.get("age", 0)),
            gender_map.get(data.get("gender", "Other"), 2),  # Default to "Other"
            occupation_map.get(data.get("occupation", "Other"), 3),  # Default to "Other"
            int(data.get("sleep", 0)),
            int(data.get("activity", 0)),
            int(data.get("caffeine", 0)),
            int(data.get("alcohol", 0)),
            smoking_map.get(data.get("smoking", "No"), 0),
            family_history_map.get(data.get("familyHistory", "No"), 0),
            int(data.get("stress", 0)),
            int(data.get("heartRate", 0)),
            int(data.get("breathingRate", 0)),
            int(data.get("sweating", 0)),
            dizziness_map.get(data.get("dizziness", "No"), 0),
            medication_map.get(data.get("medication", "No"), 0),
            int(data.get("therapy", 0)),
            life_event_map.get(data.get("lifeEvent", "No"), 0),
            int(data.get("diet", 0))
        ]

        print("🔍 Processed input features:", processed_data)

        # Convert list to NumPy array and reshape for model
        input_array = np.array(processed_data).reshape(1, -1)

        # Make a prediction
        severity_score = model.predict(input_array)[0]
        anxiety_level = classify_anxiety_level(severity_score)

        print("🎯 Prediction result:", severity_score, "| Anxiety Level:", anxiety_level)

        return jsonify({
            'severity_score': int(severity_score),
            'anxiety_level': anxiety_level
        })

    except Exception as e:
        print("❌ Error predicting severity:", str(e))
        return jsonify({'error': "Error predicting severity. Try again!"}), 500

if __name__ == '__main__':
    app.run(debug=True)
