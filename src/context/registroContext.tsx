import React, { createContext, useContext, useState, ReactNode } from 'react';
// ==============================================================================
type Registro = {
    CPF: string;
    matricula: string;
    data: string;
    atividade: string;
    quarteirao: string;
    sequencia: string;
    lado: string;
    nome: string;
    numero: string;
    seq: string;
    complemento: string;
    tipo: string;
    hora: string;
    visita: string;
    pendencia: string;
    N_A1: string;
    N_A2: string;
    N_B: string;
    N_C: string;
    N_D1: string;
    N_D2: string;
    N_E: string;
    amostra_inicial: string;
    amostra_final: string;
    quantidade_tubitos: string;
    depositos: string;
    imovel: string;
    tipo1: string;
    qtdeGrama1: string;
    qtdeDep1: string;
    tipo2: string;
    qtdeGrama2: string;
    qtdeDep2: string;
    tipo3: string;
    qtdeCarga: string;
};
// ==============================================================================
type RegistroContextType = {
    registros: Registro[];
    adicionarRegistro: (novoRegistro: Registro) => void;
    limparRegistros: () => void;
};
// ==============================================================================
const RegistroContext = createContext<RegistroContextType | undefined>(undefined);
// ==============================================================================
interface RegistroProviderProps {
    children: ReactNode;
}
// ==============================================================================
export const RegistroProvider: React.FC<RegistroProviderProps> = ({ children }) => {
    const [registros, setRegistros] = useState<Registro[]>([]);

    const adicionarRegistro = (novoRegistro: Registro) => {
        setRegistros((prevRegistros) => [...prevRegistros, novoRegistro]);
    };

    const limparRegistros = () => {
        setRegistros([]);
    };

    return (
        <RegistroContext.Provider value={{ registros, adicionarRegistro, limparRegistros }}>
            {children}
        </RegistroContext.Provider>
    );
};
// ==============================================================================
export const useRegistro = () => {
    const context = useContext(RegistroContext);
    if (!context) {
        throw new Error('useRegistro deve ser usado dentro de um RegistroProvider');
    }
    return context;
};
