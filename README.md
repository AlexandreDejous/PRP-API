# Product Registration System Demo

This git repository provides a blockchain network based on Hyperledger Fabric (https://www.hyperledger.org/projects/fabric) fabcar's network and an API + front-end to send requests to the network in an easy manner.

## Manual of the user

Before starting, please verify that your system possess the prerequisites : https://hyperledger-fabric.readthedocs.io/en/release-1.3/prereqs.html .

For this demo, we don't need Go, we use Node.Js instead.

If your PATH environment variable is not already pointing to the binary files necessary for the function of hyperledger fabric, please open a terminal and execute `export PATH=<full path to bin location>:$PATH`, bin is in PRP-API/Network .

### Start the Hyperledger Fabric Network

* Open a bash terminal in the PRS folder (PRP-API/Network/PRS) and issue the command `npm install` and `./startFabric.sh`.

* If you obtain an error about grpc_node.node or that you see in the error message the link below, please verify that grpc_node.node is present in PRP-API/APP/PRS/node_modules/fabric_client/node_modules/grpc/src/node/extension_binary/node-v57-linux-x64-glibc.
If not, either try to delete the node_modules folder in PRS and issue again `npm install` or manually put gprc_node.node that is in PRP-API/APP/patch.
From the PRS folder again, issue `./startFabric.sh`.

### Start the application

* Open a bash terminal in APP and issue `npm install`.

* Then, execute the command `npm start`, your web server is now running on localhost:3000 .

### Use the application

* Open a web browser and access localhost:3000 .

* You can now query all products, add a new product (the "type" field must be either filled with refrigerator or lighting), change the status of a product and search for a product by typing its reference. 

