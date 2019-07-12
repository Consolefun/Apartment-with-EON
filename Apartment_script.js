// Edit Scriptnode here.
// Add subroutines for each in-event or exposed field
// that you define in the script node's property page.
var Open_Microwave = eon.FindNode('Open_Microwave').GetFieldByName('SetRun');
var Rotation_pos_microwave = eon.FindNode('Open_Microwave').GetFieldByName('Rotation');
var Microwave_Light = eon.FindNode('Microwave_Light').GetFieldByName('SetRun');
var Ref_Light = eon.FindNode('Refrigerator_Light').GetFieldByName('SetRun');
var Open_Cupboard = eon.FindNode('Open_Cupboard').GetFieldByName('SetRun');
var Rotation_pos_cupboard = eon.FindNode('Open_Cupboard').GetFieldByName('Rotation');
var Open_Freezer = eon.FindNode('Open_Freezer').GetFieldByName('SetRun');
var Rotation_pos_freezer = eon.FindNode('Open_Freezer').GetFieldByName('Rotation');
var Open_Refrigerator = eon.FindNode('Open_Refrigerator').GetFieldByName('SetRun');
var Rotation_pos_refrigerator = eon.FindNode('Open_Refrigerator').GetFieldByName('Rotation');
//Ceiling
var Rotate_livingroom_ceilingfan = eon.FindNode('Rotate_livingroom_ceilingfan').GetFieldByName('SetRun');
var Rotate_bedroom_ceilingfan = eon.FindNode('Rotate_bedroom_ceilingfan').GetFieldByName('SetRun');
var Targ = eon.FindNode('ClickSensor').GetFieldByName('Target');
var Lamp_latch = false;
var Lamp_chair_latch = false;
var Micro_latch, Cupboard_latch, Refrigerator_main_latch, Freezer_latch, Ceiling_fan_latch = false;
var Lamp_couch_light = eon.FindNode('Lamp_couch_light').GetFieldByName('SetRun');
var Lamp_chair_light = eon.FindNode('Lamp_chair_light').GetFieldByName('SetRun');

function initialize()
{
	Microwave_Light.value = false;
	Ref_Light.value = false;
	Lamp_couch_light.value = false;
	Lamp_chair_light.value = false;
}
function On_door_close(){


	if(!Micro_latch){
		Microwave_Light.value = false;
	}
	if(!Freezer_latch){
		Ref_Light.value = false;
	}
	if(!Refrigerator_main_latch){
		Ref_Light.value = false;
	}
}
function On_Space(){
		Ceiling_fan_latch = !Ceiling_fan_latch;
		if(Ceiling_fan_latch){
			Rotate_livingroom_ceilingfan.value = true;
			Rotate_bedroom_ceilingfan.value = true;
		}
		else{
			Rotate_livingroom_ceilingfan.value = false;
			Rotate_bedroom_ceilingfan.value = false;
		}
}
function On_Click(){
	var nodename = eon.GetNodeName(Targ.value);
	//Open_Microwave.value = true;
	//Open_Cupboard.value = true;
	eon.trace(nodename);

	switch(nodename){
		case 'Microwave_DoorShape':
			Micro_latch = !Micro_latch;

			if(Micro_latch){

				Rotation_pos_microwave.value = [90,0,0];

				Microwave_Light.value = true;
			}
			else{
				Rotation_pos_microwave.value = [0,0,0];

			}
			Open_Microwave.value = true;
			break;
		case 'Door_Cupboard_MainShape':
			Cupboard_latch = !Cupboard_latch;
			if(Cupboard_latch){

				Rotation_pos_cupboard.value = [-90,0,0];
			}
			else{

				Rotation_pos_cupboard.value = [0,0,0];
			}
			Open_Cupboard.value = true;
			break;
		case 'Refrigerator_Freezer_DoorShape':
			Freezer_latch = !Freezer_latch;
			if(Freezer_latch){

				Rotation_pos_freezer.value = [-90,0,0];

				Ref_Light.value = true;
			}
			else{
				Rotation_pos_freezer.value = [0,0,0];

			}
			Open_Freezer.value = true;
			break;
		case 'Refrigerator_Main_DoorShape':
			Refrigerator_main_latch = !Refrigerator_main_latch;
			if(Refrigerator_main_latch){

				Rotation_pos_refrigerator.value = [-90,0,0];

				Ref_Light.value = true;
			}
			else{
				Rotation_pos_refrigerator.value = [0,0,0];

			}
			Open_Refrigerator.value = true;
			break;

		case 'Lamp_Couch_ShadeShape':
			Lamp_latch = !Lamp_latch;
			//eon.trace("Lamp turn on")
			if(Lamp_latch){
				Lamp_couch_light.value = true;
			}
			else{
				Lamp_couch_light.value = false;
			}
			break;
		case 'Lamp_Chair_ShadeShape':
			Lamp_chair_latch = !Lamp_chair_latch;

			if(Lamp_chair_latch){
				Lamp_chair_light.value = true;
			}
			else{
				Lamp_chair_light.value = false;
			}
			break;
	}

}
