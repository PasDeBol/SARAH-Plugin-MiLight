exports = module.exports = {

    // Command
    ALL_OFF:			0x41,
    ALL_ON:				0x42,
    DISCO_SPEED_SLOWER: 0x43, // Speed Down
    DISCO_SPEED_FASTER: 0x44, // Speed Up
    ZONE_1_ON:			0x45,
    ZONE_1_OFF:			0x46,
    ZONE_2_ON:			0x47,
    ZONE_2_OFF:			0x48,
    ZONE_3_ON:			0x49,
    ZONE_3_OFF:			0x4A,
    ZONE_4_ON:			0x4B,
    ZONE_4_OFF:			0x4C,
    DISCO_MODE:			0x4D, // One Step Disco Mode Up (20 Disco Modes)
	ALL_WHITE:			0xC2,
	ZONE_1_WHITE:		0xC5,
	ZONE_2_WHITE:		0xC7,
	ZONE_3_WHITE:		0xC9,
	ZONE_4_WHITE:		0xCB,
	

// 42 00 55 wait 100ms then send C2 00 55 - All Zones Change back to Warm White.
// 45 00 55 wait 100ms then send C5 00 55 - Zone 1 Change back to Warm White.
// 47 00 55 wait 100ms then send C7 00 55 - Zone 2 Change back to Warm White.
// 49 00 55 wait 100ms then send C9 00 55 - Zone 3 Change back to Warm White.
// 4B 00 55 wait 100ms then send CB 00 55 - Zone 4 Change back to Warm White.
// 42 00 55 wait 100ms then send 4E XX 55 - Set All to Brightness XX (XX range is 0x02 to 0x1B)
// 45 00 55 wait 100ms then send 4E XX 55 - Set Zone 1 to Brightness XX (XX range is 0x02 to 0x1B)
// 47 00 55 wait 100ms then send 4E XX 55 - Set Zone 2 to Brightness XX (XX range is 0x02 to 0x1B)
// 49 00 55 wait 100ms then send 4E XX 55 - Set Zone 3 to Brightness XX (XX range is 0x02 to 0x1B)
// 4B 00 55 wait 100ms then send 4E XX 55 - Set Zone 4 to Brightness XX (XX range is 0x02 to 0x1B)
// 42 00 55 wait 100ms then send 40 XX 55 - Set All to Color XX (XX range is 0x00 to 0xFF)
// 45 00 55 wait 100ms then send 40 XX 55 - Set Zone 1 to Color XX (XX range is 0x00 to 0xFF)
// 47 00 55 wait 100ms then send 40 XX 55 - Set Zone 2 to Color XX (XX range is 0x00 to 0xFF)
// 49 00 55 wait 100ms then send 40 XX 55 - Set Zone 3 to Color XX (XX range is 0x00 to 0xFF)
// 4B 00 55 wait 100ms then send 40 XX 55 - Set Zone 4 to Color XX (XX range is 0x00 to 0xFF)


	//Brightness
	SET_BRIGHTNESS_1:			0x02,
	SET_BRIGHTNESS_2:			0x03,
	SET_BRIGHTNESS_3:			0x04,
	SET_BRIGHTNESS_4:			0x05,
	SET_BRIGHTNESS_5:			0x06,
	SET_BRIGHTNESS_6:			0x07,
	SET_BRIGHTNESS_7:			0x08,
	SET_BRIGHTNESS_8:			0x09,
	SET_BRIGHTNESS_9:			0x0A,
	SET_BRIGHTNESS_10:			0x0B,
	SET_BRIGHTNESS_11:			0x0C,
	SET_BRIGHTNESS_12:			0x0D,
	SET_BRIGHTNESS_13:			0x0E,
	SET_BRIGHTNESS_14:			0x0F,
	SET_BRIGHTNESS_15:			0x1A,
	SET_BRIGHTNESS_16:			0x1B,

	// Couleurs FR
	SET_COLOR_VIOLET:			0x00,
	SET_COLOR_BLEU_ROI:			0x10,
	SET_COLOR_BLEU:				0x20,					
	SET_COLOR_AQUA:				0x30,
	SET_COLOR_MENTE:			0x40,
	SET_COLOR_SEAFOAM_GREEN:	0x50,
	SET_COLOR_VERT:				0x60,
	SET_COLOR_CITRON_VERT:		0x70,			
	SET_COLOR_JAUNE:			0x80,
	SET_COLOR_JAUNE_ORANGE:		0x90,
	SET_COLOR_ORANGE:			0xA0,
	SET_COLOR_ROUGE:			0xB0,
	SET_COLOR_ROSE:				0xC0,
	SET_COLOR_FUCHIA:			0xD0,
	SET_COLOR_LILA:				0xE0,
	SET_COLOR_LAVANDE:			0xF0,

	// Colors
	SET_COLOR_VIOLET:			0x00,
	SET_COLOR_BLUE:				0x10,
	SET_COLOR_BABY_BLUE:		0x20,					
	SET_COLOR_AQUA:				0x30,
	SET_COLOR_MINT:				0x40,
	SET_COLOR_SEAFOAM_GREEN:	0x50,
	SET_COLOR_GREEN:			0x60,
	SET_COLOR_LIME_GREEN:		0x70,			
	SET_COLOR_YELLOW:			0x80,
	SET_COLOR_YELLOW_ORANGE:	0x90,
	SET_COLOR_ORANGE:			0xA0,
	SET_COLOR_RED:				0xB0,
	SET_COLOR_PINK:				0xC0,
	SET_COLOR_FUSIA:			0xD0,
	SET_COLOR_LILAC:			0xE0,
	SET_COLOR_LAVENDAR:			0xF0		
}