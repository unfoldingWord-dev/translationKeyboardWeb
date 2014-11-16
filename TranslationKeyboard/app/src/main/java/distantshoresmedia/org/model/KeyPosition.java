/* Generated by JavaFromJSON */
/*http://javafromjson.dashingrocket.com*/

package distantshoresmedia.org.model;

import java.util.ArrayList;

import distantshoresmedia.org.model.*;

public class KeyPosition extends BaseDataClass {


	private float percentWidth;
 	public void setPercentWidth(float percentWidth) {
		this.percentWidth = percentWidth;
	}
	public float getPercentWidth() {
		return percentWidth;
	}


    private int columnindex;
 	public void setColumnindex(int columnindex) {
		this.columnindex = columnindex;
	}
	public int getColumnindex() {
		return columnindex;
	}


	private int rowIndex;
 	public void setRowIndex(int rowIndex) {
		this.rowIndex = rowIndex;
	}
	public int getRowIndex() {
		return rowIndex;
	}


	private int keyboardVariantID;
 	public void setKeyboardVariantID(int keyboardVariantID) {
		this.keyboardVariantID = keyboardVariantID;
	}
	public int getKeyboardVariantID() {
		return keyboardVariantID;
	}

    public ArrayList<Character> characters = new ArrayList<Character>();
    public void setCharacters(ArrayList<Character> characters){
        this.characters = characters;
    }
    public ArrayList<Character> getCharacters(){
        return this.characters;
    }

    public KeyPosition(int uid, int created, int updated, float percentWidth, int rowIndex, int columnindex, int keyboardVariantID){
        super(uid, created, updated);
        this.percentWidth = percentWidth;
        this.rowIndex = rowIndex;
        this.columnindex = columnindex;
        this.keyboardVariantID = keyboardVariantID;
    }

}