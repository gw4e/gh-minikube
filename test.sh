mvn clean test -P chrome
if [ $? -ne 0 ]; then
  echo "Test failed" >> $GITHUB_OUTPUT
else
  echo "Test passed" >> $GITHUB_OUTPUT
fi
