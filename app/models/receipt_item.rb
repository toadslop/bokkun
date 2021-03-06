class ReceiptItem < ApplicationRecord
  belongs_to :receipt
  has_one :budget, through: :receipt

  validates :name, :amount, :tax, presence: true
  validates :amount, :tax, numericality: { only_integer: true }

  def tax_amount
    (self.amount * (self.tax / 100.0)).floor
  end
end
