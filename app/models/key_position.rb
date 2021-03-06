# == Schema Information
#
# Table name: key_positions
#
#  id                  :integer          not null, primary key
#  column_index        :integer
#  row_index           :integer
#  percent_width       :float
#  created_at          :datetime
#  updated_at          :datetime
#  keyboard_variant_id :integer
#

class KeyPosition < ActiveRecord::Base
	has_many :characters, dependent: :destroy
	belongs_to :keyboard_variant

  def get_characters_sorted_by_modmask
    characters.order(:modmask)
  end

  def get_longpress_characters
    characters.where(modmask: 2)
  end

end
