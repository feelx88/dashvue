#!/bin/bash

pushd frontend
npm install
npm run build
popd

pushd backend
npm install
popd