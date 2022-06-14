module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "mongo-6385",
            "image": "geppettotest/mongo-local:april2020",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "27017",
                    "protocol": "tcp",
                    "hostPort": "27017"
                }
            ],
            "environmentFiles": null,
            "environment": [{
                "name": "MONGO_INITDB_ROOT_PASSWORD",
                "value": "password"
              },
              {
                "name": "MONGO_INITDB_ROOT_USERNAME",
                "value": "admin"
              }],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/data/db",
                  "sourceVolume": "newetemplatedata"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/newetemplatedata",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },,
        {
            "name": "apigateway-6385",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-newetemplatedata-6385-apigateway:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8000",
                    "protocol": "tcp",
                    "hostPort": "8000"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/newetemplatedata_6385?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}
            ],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "newetemplatedata"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/newetemplatedata",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },        
        {
            "name": "authproxy-6385",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-newetemplatedata-6385-authproxy:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8001",
                    "protocol": "tcp",
                    "hostPort": "8001"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/newetemplatedata_6385?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "newetemplatedata"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/newetemplatedata",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "vault-6385",
            "image": "vault:latest",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8200",
                    "protocol": "tcp",
                    "hostPort": "8200"
                }
            ],
            "environmentFiles": null,
            "environment": null,
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "newetemplatedata"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/newetemplatedata",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "gcam-6385",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-newetemplatedata-6385-gcam:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8007",
                    "protocol": "tcp",
                    "hostPort": "8007"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/newetemplatedata_6385?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "newetemplatedata"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/newetemplatedata",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "gepfilemanager-6385",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-newetemplatedata-6385-gepfilemanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "3015",
                    "protocol": "tcp",
                    "hostPort": "3015"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/newetemplatedata_6385?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "newetemplatedata"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/newetemplatedata",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "securitymanager-6385",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-newetemplatedata-6385-securitymanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8003",
                    "protocol": "tcp",
                    "hostPort": "8003"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/newetemplatedata_6385?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}
            ],
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "newetemplatedata"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/newetemplatedata",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "systemcredentialmanager-6385",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-newetemplatedata-6385-systemcredentialmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8005",
                    "protocol": "tcp",
                    "hostPort": "8005"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/newetemplatedata_6385?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "newetemplatedata"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/newetemplatedata",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },
        {
            "name": "systementry-6385",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-newetemplatedata-6385-systementry:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8011",
                    "protocol": "tcp",
                    "hostPort": "8011"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/newetemplatedata_6385?authSource=admin"},{"name":"MONGO_DOMAIN","value":"127.0.0.1"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"GCAMURL","value":"http://127.0.0.1:8007"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "newetemplatedata"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/newetemplatedata",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "newetemplatedata",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "newetemplatedata",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
