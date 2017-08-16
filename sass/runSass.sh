#!/bin/sh

dir="${0%/*}"
cd "${dir}"
sass --watch sass:css --style compressed
