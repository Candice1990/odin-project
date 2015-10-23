def bubble_sort_by(array)
	if block_given?
		sorted = false
		begin
			sorted = true
			(array.length - 1).times do |i|
				if yield(array[i], array[i + 1]) > 0
					array[i], array[i + 1] = array[i + 1], array[i]
					sorted = false
				end
			end
		end until sorted == true
		print "#{array}\n\n"
	end
end


bubble_sort_by(["hi","hello","hey"]) do |left,right|
	right.length - left.length
end
