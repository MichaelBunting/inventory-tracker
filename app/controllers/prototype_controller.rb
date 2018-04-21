class PrototypeController < ApplicationController
  def index
    if params[:page]
      render "prototype/#{params[:page]}"
    else
      render "prototype/index"
    end
  end
end
