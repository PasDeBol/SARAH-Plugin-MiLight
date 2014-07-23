exports = module.exports = {

    ALL_ON:					0x35,
    ALL_OFF:				0x39,
    BRIGHTNESS_UP:			0x3C,
    BRIGHTNESS_DOWN:		0x34,	// Il y a 10 niveaux entre le mini / maxi.There are ten steps between min and max
    WARM_WHITE_INCREASE:	0x3E,
    COOL_WHITE_INCREASE:	0x3F,	// There are ten steps between warmest and coolest.
    ZONE_1_ON:				0x38,
    ZONE_1_OFF:				0x3B,
    ZONE_2_ON:				0x3D,
    ZONE_2_OFF:				0x33,
    ZONE_3_ON:				0x37,
    ZONE_3_OFF:				0x3A,
    ZONE_4_ON:				0x32,
    ZONE_4_OFF:				0x36,
	ALL_FULL_BRIGHTNESS:	0xB5,	// Send >=100ms after All On
	ZONE_1_FULL_BRIGHTNESS:	0xB8,	// Send >=100ms after Zone 1 On
	ZONE_2_FULL_BRIGHTNESS:	0xBD,	// Send >=100ms after Zone 2 On
	ZONE_3_FULL_BRIGHTNESS:	0xB7,	// Send >=100ms after Zone 3 On
	ZONE_4_FULL_BRIGHTNESS:	0xB2,	// Send >=100ms after Zone 4 On
	ALL_NIGHT_MODE:			0xB9,	// Send >=100ms after All Off
	//ALL_NIGHT_MODE_HOLD:	0xBB,	// code duplicate 0xBB, a verifier
	ZONE_1_NIGHT_MODE:		0xBB,	// Send >=100ms after Zone 1 Off
	ZONE_2_NIGHT_MODE:		0xB3,	// Send >=100ms after Zone 2 Off
	ZONE_3_NIGHT_MODE:		0xBA,	// Send >=100ms after Zone 3 Off
	ZONE_4_NIGHT_MODE:		0xB6	// Send >=100ms after Zone 4 Off
}
