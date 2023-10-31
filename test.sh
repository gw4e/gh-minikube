mvn clean test -P chrome
if [ $? -ne 0 ]; then
  echo "Test failed" >> test-status.txt
else
  echo "Test passed" >> test-status.txt
fi
