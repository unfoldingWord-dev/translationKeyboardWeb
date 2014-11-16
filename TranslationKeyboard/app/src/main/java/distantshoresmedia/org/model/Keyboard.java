/* Generated by JavaFromJSON */
/*http://javafromjson.dashingrocket.com*/

package distantshoresmedia.org.model;

import java.util.ArrayList;

import distantshoresmedia.org.model.*;

public class Keyboard extends BaseDataClass {


	private String isoLanguage;
 	public void setIsoLanguage(String isoLanguage) {
		this.isoLanguage = isoLanguage;
	}
	public String getIsoLanguage() {
		return isoLanguage;
	}


	private String name;
 	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}


	private String isoRegion;
 	public void setIsoRegion(String isoRegion) {
		this.isoRegion = isoRegion;
	}
	public String getIsoRegion() {
		return isoRegion;
	}

    public ArrayList<KeyboardVariant> keyboardVariants = new ArrayList<KeyboardVariant>();
    public void setKeyboardVariants(ArrayList<KeyboardVariant> keyboardVariants){
        this.keyboardVariants = keyboardVariants;
    }
    public ArrayList<KeyboardVariant> getKeyboardVariants(){
        return this.keyboardVariants;
    }

    public Keyboard(int uid, int created, int updated, String isoLanguage, String name, String isoRegion){
        super(uid, created, updated);
        this.isoLanguage = isoLanguage;
        this.name = name;
        this.isoRegion = isoRegion;
    }
}