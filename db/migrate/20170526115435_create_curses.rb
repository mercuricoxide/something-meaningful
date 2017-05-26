class CreateCurses < ActiveRecord::Migration
  def change
    create_table :curses do |t|
      t.string :word, null: false
      t.references :message
      t.timestamps(null: false)
    end
  end
end
