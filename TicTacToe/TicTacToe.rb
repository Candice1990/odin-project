module TicTacToe
	
	# Creates class Player
	Player = Struct.new(:name, :marker)

	class Game
		# Winning combinations
		@@win = [[0, 1 ,2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
				 [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

		def initialize
			# Asks for each players name
			puts "Enter Player 1 name: "
			name1 = gets.chomp
			puts "\nEnter Player 2 name: "
			name2 = gets.chomp
			
			# Creates player 1 and player 2
			@player1 = Player.new(name1, :X)
			@player2 = Player.new(name2, :O)
			@winner = nil
			new_board
		end

		def new_board
			# Sets up new board as array with positions 
			@board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
		end

		def show_board
			# Splits the array into 3 rows and puts it on the screen
			puts "\n\n"
			puts @board.each_slice(3) { |row| puts row.join(" | ") }
			puts "\n\n"
		end

		def player_turn(player)
			# Gets players input and checks to see if it is a number 1-9
			# then sends it to the place_marker method
			begin
				input = false
				show_board
				puts "#{player.name}, it is your turn. Select your #{player.marker} position."
				player_input = gets.chomp.to_i
				if player_input > 0 && player_input <= 9
					player_input = player_input - 1
					place_marker(player_input, player.marker, player)
					input = true
					check_win(player, player.marker)
				else
					puts "You're choice was invalid. Please type a number.\n\n"
				end
			end until input == true

		end

		def place_marker(input, marker, player)
			# Takes input and marker from player_turn method and uses it to 
			# place the correct marker into the player specified position
			if (@board[input] == :X || @board[input] == :O)
				puts "This position is taken, please choose another position."
				player_turn(player)
			else
				@board[input] = marker
			end
		end

		def play
			@turn = 1
			begin
				if @turn % 2 == 1
					player_turn(@player1)
				else
					player_turn(@player2)
				end
				@turn += 1
			end until game_over
			results
			play_again?
		end

		def check_win(player, marker)
			# Checks to see if the current player has won by checking the
			#winning combos @@win
			@@win.each do |i|
				@winner = player if i.all? { |x| @board[x] == player.marker }
			end
		end

		def game_over
			@turn > 9 || @winner
		end

		def results
			# Displays results of the game
			if @turn > 9 && !@winner
				show_board
				puts "It's a tie! Better luck next time!"
			else
				show_board
				puts "Great job, #{@winner.name}! You won!"
			end
		end

		def play_again?
			puts "Would you like to play again?"
			response = gets.chomp.downcase
			if response == "y"
				Game.new.play
			else
				puts "Come back soon!"
				exit
			end
		end

	end
end

include TicTacToe

Game.new.play

