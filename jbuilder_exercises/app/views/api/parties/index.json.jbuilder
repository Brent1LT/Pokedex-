
json.array! @parties do |party|
  json.name party.name
  json.guests do
    json.array! party.guests, :name
  end 
end 