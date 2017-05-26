class Curse < ActiveRecord::Base
  belongs_to :user

  validates :word, presence: true
end
