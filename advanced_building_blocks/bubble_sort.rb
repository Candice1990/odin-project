def bubble_sort(array)
	sorted = false
	begin
		sorted = true
		(array.length - 1).times do |i|
			if array[i + 1] && array[i] > array[i + 1]
				array[i], array[i + 1] = array[i + 1], array[i]
				sorted = false
			end
		end
	end until sorted == true
	print "#{array}\n\n"
end


bubble_sort([4, 3, 78, 2, 0, 2])