import { TypeAnimation } from "react-type-animation";
function CodeAnimation() {
  return (
    <div>
      <TypeAnimation
        sequence={[`Import libraries
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load the Iris dataset
iris = load_iris()
X = iris.data  # Features
y = iris.target `,
          1000,
          "",
        ]}
        repeat={Infinity}
        cursor={true}
        omitDeletionAnimation={false}
      ></TypeAnimation>
    </div>
  );
}
export default CodeAnimation;
