import React, { createContext, useContext, useState, ReactNode } from 'react';

type Registro = {
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

type RegistroContextType = {
    registros: Registro[];
    adicionarRegistro: (novoRegistro: Registro) => void;
    limparRegistros: () => void;
};

const RegistroContext = createContext<RegistroContextType | undefined>(undefined);

interface RegistroProviderProps {
    children: ReactNode;
}

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

export const useRegistro = () => {
    const context = useContext(RegistroContext);
    if (!context) {
        throw new Error('useRegistro deve ser usado dentro de um RegistroProvider');
    }
    return context;
};
