module Employer
  class UsersController < ApplicationController

    def dashboard
      @user = current_user
      authorize @user
    end

    def index
      @users = policy_scope(User)
    end

    def show
      @user = User.find_by(id: params[:id])
      authorize @user
    end

  end
end
