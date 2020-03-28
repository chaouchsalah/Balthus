import styled from 'styled-components';
import { primary, gray } from '../../utils/colors';

export const StyledInput = styled.span`
	input:focus ~ label,
	input:valid ~ label {
		font-size: 16px;
		color: ${primary};
		top: -2.25rem;
	}

	.styled-input {
		width: 90%;
		margin-bottom: 30px;
    position: relative;
	}
	.styled-input label {
		color: #999;
		padding: 1rem;
		position: absolute;
		top: 0;
		left: 0;
		transition: all 0.25s cubic-bezier(0.2, 0, 0.03, 1);
		pointer-events: none;
	}

	input {
		padding: 1rem 1rem;
		border: 0;
		width: 100%;
		font-size: 1rem;
    background-color: ${gray};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
	}
	input ~ span {
		display: block;
		width: 0;
		height: 3px;
		background: ${primary};
		position: absolute;
		bottom: 0;
		left: 0;
	}
	input:focus {
		outline: 0;
	}
	input:focus ~ span {
		width: 106%;
		transition: all 0.125s cubic-bezier(0.2, 0, 0.03, 1);
	}
`;

export const Check = styled.div`
margin: 10px;
	@supports (-webkit-appearance: none) or (-moz-appearance: none) {
		input[type='checkbox'],
		input[type='radio'] {
			--active: ${primary};
			--active-inner: #fff;
			--focus: 2px rgba(39, 94, 254, 0.3);
			--border: #bbc1e1;
			--border-hover: ${primary};
			--background: #fff;
			--disabled: #f6f8ff;
			--disabled-inner: #e1e6f9;
			-webkit-appearance: none;
			-moz-appearance: none;
			height: 21px;
			outline: none;
			display: inline-block;
			vertical-align: top;
			position: relative;
			margin: 0;
			cursor: pointer;
			border: 1px solid var(--bc, var(--border));
			background: var(--b, var(--background));
			transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
			&:after {
				content: '';
				display: block;
				left: 0;
				top: 0;
				position: absolute;
				transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
					opacity var(--d-o, 0.2s);
			}
			&:checked {
				--b: var(--active);
				--bc: var(--active);
				--d-o: 0.3s;
				--d-t: 0.6s;
				--d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
			}
			&:disabled {
				--b: var(--disabled);
				cursor: not-allowed;
				opacity: 0.9;
				&:checked {
					--b: var(--disabled-inner);
					--bc: var(--border);
				}
				& + label {
					cursor: not-allowed;
				}
			}
			&:hover {
				&:not(:checked) {
					&:not(:disabled) {
						--bc: var(--border-hover);
					}
				}
			}
			&:focus {
				box-shadow: 0 0 0 var(--focus);
			}
			&:not(.switch) {
				width: 21px;
				&:after {
					opacity: var(--o, 0);
				}
				&:checked {
					--o: 1;
				}
			}
			& + label {
				font-size: 14px;
				line-height: 21px;
				display: inline-block;
				vertical-align: top;
				cursor: pointer;
				margin-left: 4px;
			}
		}
		input[type='checkbox'] {
			&:not(.switch) {
				border-radius: 7px;
				&:after {
					width: 5px;
					height: 9px;
					border: 2px solid var(--active-inner);
					border-top: 0;
					border-left: 0;
					left: 7px;
					top: 4px;
					transform: rotate(var(--r, 20deg));
				}
				&:checked {
					--r: 43deg;
				}
			}
			&.switch {
				width: 38px;
				border-radius: 11px;
				&:after {
					left: 2px;
					top: 2px;
					border-radius: 50%;
					width: 15px;
					height: 15px;
					background: var(--ab, var(--border));
					transform: translateX(var(--x, 0));
				}
				&:checked {
					--ab: var(--active-inner);
					--x: 17px;
				}
				&:disabled {
					&:not(:checked) {
						&:after {
							opacity: 0.6;
						}
					}
				}
			}
		}
		input[type='radio'] {
			border-radius: 50%;
			&:after {
				width: 19px;
				height: 19px;
				border-radius: 50%;
				background: var(--active-inner);
				opacity: 0;
				transform: scale(var(--s, 0.7));
			}
			&:checked {
				--s: 0.5;
			}
		}
	}

	// Demo

	ul {
		margin: 12px;
		padding: 0;
		list-style: none;
		width: 100%;
		max-width: 320px;
		li {
			margin: 16px 0;
			position: relative;
		}
	}

	html {
		box-sizing: border-box;
	}

	* {
		box-sizing: inherit;
		&:before,
		&:after {
			box-sizing: inherit;
		}
	}
`;
