/**
 * Bean para o player
 */
var Player = function() {
    var player = {};
    player.TORSO = 1000;
    player.HEAD = 1001;
    player.UPPER_LEFT_ARM = 1002;
    player.LOWER_LEFT_ARM = 1003;
    player.UPPER_RIGHT_ARM = 1004;
    player.LOWER_RIGHT_ARM = 1005;
    player.UPPER_LEFT_LEG = 1006;
    player.LOWER_LEFT_LEG = 1007;
    player.UPPER_RIGHT_LEG = 1008;
    player.LOWER_RIGHT_LEG = 1009;        
    player.NECK = 1010;
    player.LEFT_SHOULDER = 1011;
    player.RIGHT_SHOULDER = 1012;
    player.LEFT_ELBOW = 1013;
    player.RIGHT_ELBOW = 1014;
    player.LEFT_THIGH = 1015;
    player.RIGHT_THIGH = 1016;
    player.LEFT_KNEE = 1017;
    player.RIGHT_KNEE = 1018;
    
    player.ragdollLeft = function() {
        console.log('left');
    };
    player.ragdollRight = function() {
        console.log('right');
    };
    player.ragdollUp = function() {
        var hinge = level.getObjectById(player.LEFT_SHOULDER).bodyRef;
        hinge.m_enableMotor = true;
        var hinge = level.getObjectById(player.LEFT_ELBOW).bodyRef;
        hinge.m_enableMotor = true;
        var hinge = level.getObjectById(player.RIGHT_SHOULDER).bodyRef;
        hinge.m_enableMotor = true;
        var hinge = level.getObjectById(player.RIGHT_ELBOW).bodyRef;
        hinge.m_enableMotor = true;
        var hinge = level.getObjectById(player.LEFT_THIGH).bodyRef;
        hinge.m_enableMotor = true;
        var hinge = level.getObjectById(player.LEFT_KNEE).bodyRef;
        hinge.m_enableMotor = true;
        var hinge = level.getObjectById(player.RIGHT_THIGH).bodyRef;
        hinge.m_enableMotor = true;
        var hinge = level.getObjectById(player.RIGHT_KNEE).bodyRef;
        hinge.m_enableMotor = true;
    };
    player.ragdollDown = function() {
        console.log('down');
    };
    player.ragdollRelease = function() {
        var hinge = level.getObjectById(player.LEFT_SHOULDER).bodyRef;
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.LEFT_ELBOW).bodyRef;
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.RIGHT_SHOULDER).bodyRef;
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.RIGHT_ELBOW).bodyRef;
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.LEFT_THIGH).bodyRef;
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.LEFT_KNEE).bodyRef;
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.RIGHT_THIGH).bodyRef;
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.RIGHT_KNEE).bodyRef;
        hinge.m_enableMotor = false;
    };
    player.initHinges = function() {
        var hinge = level.getObjectById(player.LEFT_SHOULDER).bodyRef;
        hinge.SetMotorSpeed(10.0);
        hinge.SetMotorTorque(100000000);
        hinge.m_enableLimit = true;
        hinge.m_lowerAngle = angleToRad(-135);
        hinge.m_upperAngle = angleToRad(90);
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.LEFT_ELBOW).bodyRef;
        hinge.SetMotorSpeed(10.0);
        hinge.SetMotorTorque(100000000);
        hinge.m_enableLimit = true;
        hinge.m_lowerAngle = angleToRad(-135);
        hinge.m_upperAngle = angleToRad(0);
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.RIGHT_SHOULDER).bodyRef;
        hinge.SetMotorSpeed(10.0);
        hinge.SetMotorTorque(100000000);
        hinge.m_enableLimit = true;
        hinge.m_lowerAngle = angleToRad(-135);
        hinge.m_upperAngle = angleToRad(90);
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.RIGHT_ELBOW).bodyRef;
        hinge.SetMotorSpeed(10.0);
        hinge.SetMotorTorque(100000000);
        hinge.m_enableLimit = true;
        hinge.m_lowerAngle = angleToRad(-135);
        hinge.m_upperAngle = angleToRad(0);
        hinge.m_enableMotor = false;
        
        
        var hinge = level.getObjectById(player.LEFT_THIGH).bodyRef;
        hinge.SetMotorSpeed(10.0);
        hinge.SetMotorTorque(100000000);
        hinge.m_enableLimit = true;
        hinge.m_lowerAngle = angleToRad(-20);
        hinge.m_upperAngle = angleToRad(120);
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.LEFT_KNEE).bodyRef;
        hinge.SetMotorSpeed(10.0);
        hinge.SetMotorTorque(100000000);
        hinge.m_enableLimit = true;
        hinge.m_lowerAngle = angleToRad(-135);
        hinge.m_upperAngle = angleToRad(0);
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.RIGHT_THIGH).bodyRef;
        hinge.SetMotorSpeed(10.0);
        hinge.SetMotorTorque(100000000);
        hinge.m_enableLimit = true;
        hinge.m_lowerAngle = angleToRad(-20);
        hinge.m_upperAngle = angleToRad(120);
        hinge.m_enableMotor = false;
        var hinge = level.getObjectById(player.RIGHT_KNEE).bodyRef;
        hinge.SetMotorSpeed(10.0);
        hinge.SetMotorTorque(100000000);
        hinge.m_enableLimit = true;
        hinge.m_lowerAngle = angleToRad(-135);
        hinge.m_upperAngle = angleToRad(0);
        hinge.m_enableMotor = false;
    };
    
    // Exporta as funções públicas
    return {
        
        ragdollLeft : function() {
            player.ragdollLeft();
        },
        ragdollRight : function() {
            player.ragdollRight();
        },
        ragdollUp : function() {
            player.ragdollUp();
        },
        ragdollDown : function() {
            player.ragdollDown();
        },
        ragdollRelease : function() {
            player.ragdollRelease();
        },
        initHinges : function() {
            player.initHinges();
        },
        
        // IDs para as partes do corpo
        TORSO : 1000,
        HEAD : 1001,
        UPPER_LEFT_ARM : 1002,
        LOWER_LEFT_ARM : 1003,
        UPPER_RIGHT_ARM : 1004,
        LOWER_RIGHT_ARM : 1005,
        UPPER_LEFT_LEG : 1006,
        LOWER_LEFT_LEG : 1007,
        UPPER_RIGHT_LEG : 1008,
        LOWER_RIGHT_LEG : 1009,        
        NECK : 1010,
        LEFT_SHOULDER : 1011,
        RIGHT_SHOULDER : 1012,
        LEFT_ELBOW : 1013,
        RIGHT_ELBOW : 1014,
        LEFT_THIGH : 1015,
        RIGHT_THIGH : 1016,
        LEFT_KNEE : 1017,
        RIGHT_KNEE : 1018,
    };
};
