class PrototypeController < ApplicationController
  layout "prototype"

  def index
    if params[:page]
      render "prototype/#{params[:page]}"
    else
      render "prototype/index"
    end
  end
end
