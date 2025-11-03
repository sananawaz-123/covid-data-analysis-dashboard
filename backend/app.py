
from flask import Flask, jsonify
import json
import os

app = Flask(__name__)

DATA_PATH = os.path.join(os.path.dirname(__file__), "sample_data.json")

@app.route("/api/covid/<country>", methods=["GET"])
def get_covid_data(country):
    country = country.lower()
    with open(DATA_PATH, "r") as f:
        data = json.load(f)
    for item in data["countries"]:
        if item["country"].lower() == country:
            return jsonify(item)
    return jsonify({"error": "Data not found for " + country}), 404

@app.route("/api/covid", methods=["GET"])
def get_all_countries():
    with open(DATA_PATH, "r") as f:
        data = json.load(f)
    return jsonify(data["countries"])

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
