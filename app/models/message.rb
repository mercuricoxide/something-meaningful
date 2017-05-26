class Message < ActiveRecord::Base
  belongs_to :user
  has_many :curses

  validates :body, presence: true
end
