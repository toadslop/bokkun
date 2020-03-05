class Budget < ApplicationRecord
  has_many :trip_budgets, dependent: :destroy
  has_many :trips, through: :trip_budgets

  validates :name, :amount, presence: true
  validates :amount, numericality: { only_integer: true }
end
