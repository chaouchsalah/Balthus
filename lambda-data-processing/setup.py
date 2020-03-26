import setuptools
import os

with open("README.md", "r") as fh:
    long_description = fh.read()

with open(os.path.join("requirements.txt")) as fh:
    required_packages = fh.read().splitlines()

setuptools.setup(
    name="DataProcessing",
    packages= setuptools.find_packages(),
    description="A lambda function that processes data in S3",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url= "",
    author="Chaouch Salah eddine",
    author_email= "",
    license= "",
    version="0.0",
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    install_requires= required_packages,
    python_requires=">=3.8",
    test_suite='nose.collector',
    tests_require=['nose'],
)
